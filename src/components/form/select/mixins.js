const select = ({ theme, ...props }) => {
    const selectSizes = Object.keys(theme.selectSize);
    const selectsize = Object.keys(props).filter(size => selectSizes.includes(size));
    // console.log('kshdlfwjedk')
    // console.log(selectsize)
    const k = theme.selectSize[selectsize[0]] || {}
    console.log(theme.selectSize[selectsize[0]])
    return `
      height:${k.height || '38px'}
      width:${ k.width || '200px'}
 
  `;
  };

  export default select;

//   height:${theme.selectSize[selectsize[0]].height || "50px"}
//   width:${theme.selectSize[selectsize[0]].width || '50px'}