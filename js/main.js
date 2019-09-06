const $ = query => document.querySelector(query)

const genWiggleKeyframes = (amount, amplitude) => {
  const result = []

  for (let i = amount; i >= 0; i--) {
    result.push(
      {value: anime.random(-amplitude, amplitude) * i}
    )
  }

  return result
}

const getScaleKeyFrames = amount => {
  const result = []

  for (let i = amount; i >= 0; i--) {
    result.push({
      value: 1 + i / 30
    })
  }

  return result
}

const getArguments = (element, amount, amplitude) => {
  return {
    targets: element,
    scale: getScaleKeyFrames(amount),
    translateX: genWiggleKeyframes(amount, amplitude),
    translateY: genWiggleKeyframes(amount, amplitude),
    easing: (el, i, total) => {
      return t => 1
    },
    duration: 800
  }
};

const show = () => {
  $("#left .character").style.opacity = 1
  $("#right .character").style.opacity = 1
  $("#vs .anime").style.opacity = 1

  anime(getArguments("#left .character", 20, 30))
  anime(getArguments("#right .character", 20, 30))
  anime(getArguments("#vs .anime", 20, 15))
}
