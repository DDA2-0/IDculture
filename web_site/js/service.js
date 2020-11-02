const curtains = new Curtains({
      container: "canvas",
      pixelRatio: Math.min(1.5, window.devicePixelRatio), 
  });
  const params = {
      vertexShaderID: "vertexShader",
      fragmentShaderID: "fragmentShader",
      uniforms: {
          transition: {
          name: "uTransition",
          type: "1f",
          value: 0,
          },
      },
  };
  
  const multiTexturesPlane = new Plane(
      curtains, 
      [...document.getElementsByClassName("plane")], // could be many Planes
      params
  );