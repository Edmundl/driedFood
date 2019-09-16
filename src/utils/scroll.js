export function scroll(defaults = {}, pickerCont = [], curIndex = [], pickList = []) {
  let startTime, points = [], startY, endY, translate = []
  function initPos(index) {
    translate[index] = 2 - curIndex[index] // transform移动的距离，单位是rem
    setTranslate(pickerCont[index], translate[index])
  }
  function setTranslate(target, diff) {
    target.style.transform = `translate3d(0, ${diff}rem, 0)`
  }
  function setTransition(target, time) {
    target.style.transition = `all ${time}s ease`
  }
  function touchstart(event) {
    var touch = event.changedTouches[0]
    startY = touch.pageY
    startTime = +new Date()
  }
  function touchmove(event, index) {
    event.preventDefault()
    var touch = event.changedTouches[0]
    endY = touch.pageY
    dealTouchmove(index)
  }
  function touchend(event, index) {
    var touch = event.changedTouches[0]
    endY = touch.pageY
    dealTouchend(index)
    return curIndex[index]
  }
  function dealTouchmove(index) {
    var distanceY = endY - startY // 往上滑动 endY < startY
    // 判断是否是单击
    if (startY !== Math.abs(distanceY)) {
      setTransition(pickerCont[index], 0)
      setTranslate(pickerCont[index], (distanceY / 100) + translate)
    }
    // 记录移动轨迹
    startTime = +new Date()
    points.push({
      time: startTime,
      y: endY
    })
    if (points.length > 40) {
      points.shift()
    }
  }
  function dealTouchend(index) {
    const endTime = new Date().getTime();
    const relativeY = pickerCont[index].getBoundingClientRect().top + defaults.bodyHeight * 100 // 单位是px
    var distanceY = (endY - startY)
    // 如果滑动超过100ms，则停止，没有惯性滑动
    if (endTime - startTime > 100) {
      // 如果endY和startY相差小于10px
      if (Math.abs(distanceY) > 10) {
        stop(distanceY, index)
      } else {
        stop(endY - relativeY, index)
      }
    } else {
      if (Math.abs(distanceY) > 10) {
        const endPos = points.length - 1;
        let startPos = endPos;
        for (let i = endPos; i > 0 && startTime - points[i].time < 100; i--) {
          startPos = i
        }
        if (startPos !== endPos) {
          const ep = points[endPos];
          const sp = points[startPos];
          const t = ep.time - sp.time;
          const s = ep.y - sp.y;
          const v = s / t; // 出手时的速度
          const diff = v * 150 + distanceY; // 滑行 150ms,这里直接影响“灵敏度”
          stop(diff, index);
        } else {
          stop(0, index);
        }
      } else {
        stop(endY - relativeY, index)
      }
    }
  }
  function stop(distanceY, index) {
    translate[index] = translate[index] + distanceY / 100
    curIndex[index] = defaults.offset - Math.round(translate[index])
    if (curIndex[index] < 0) {
      curIndex[index] = 0
    } else if (curIndex[index] > pickList[index].length - 1) {
      curIndex[index] = pickList[index].length - 1
    }
    setTransition(pickerCont[index], 0.3)
    setTranslate(pickerCont[index], defaults.offset - curIndex[index])
  }
  return {
    initPos,
    touchstart,
    touchmove,
    touchend
  }
}