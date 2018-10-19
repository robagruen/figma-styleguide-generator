let express = require('express');
let app = express();
let fetch = require('isomorphic-fetch');

const FigmaAPIKey = ``;
const FigmaFileID = ``;

async function figmaFileFetch(fileId) {
  let result = await fetch(`https://api.figma.com/v1/files/` + fileId, {
    method: 'GET',
    headers: {
      // authenticate the request
      'X-Figma-Token': FigmaAPIKey
    }
  });

// Get Frame Data
  let figmaFileStruct = await result.json();

  let figmaFrames = figmaFileStruct.document.children
    .filter(child => child.type === 'CANVAS')[0].children
    .filter(child => child.type === 'FRAME')
    .map(frame => {
      return {
        name: frame.name,
        id: frame.id
      }
    });

// Getting Figma Images at the scale of 2x
    let ids = figmaFrames.map(comp => comp.id).join(',');

    let imageResults = await fetch('https://api.figma.com/v1/images/' + fileId + '?scale=3&ids=' + ids, {
      method: 'GET',
      headers: {
        'X-Figma-Token': FigmaAPIKey
      }
    }).catch(error => console.log(error));

    let figmaImages = await imageResults.json();

// Filtering to only receive the image
    figmaImages = figmaImages.images;

    return figmaFrames.map(frame => {
      return {
        name: frame.name,
        url: figmaImages[frame.id]
      }
    })
}

app.use('/frames', async function (req, res, next) {
    let result = await figmaFileFetch(FigmaFileID).catch(error => console.log(error))
    res.send(result)
})


app.listen(3001, console.log('its working i guess, it is on {{PORT}}'));
