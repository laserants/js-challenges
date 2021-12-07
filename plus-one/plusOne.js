function sumaruno(arreglo){
  / @type {Array} */
  let nuevo = []
  /** @type {Array} */
  let arreglorev = arreglo.reverse()
  let acarreo = 1

  arreglorev.forEach((element) => {
      const num = parseInt(element) + acarreo
      const num_string = num + ''
      if(num > 9) {
          nuevo.push(num_string[1])
          acarreo = parseInt(num_string[0]); 
      }
      else{
          nuevo.push(num_string[0]) 
          acarreo = 0 
      }
  });

  if(acarreo>0) nuevo.push(acarreo)
  return nuevo.reverse().map(Number)
}

export default sumaruno;
