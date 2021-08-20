const router = (ruta: string) => {
    console.log("Clicked", ruta);
  
    switch (ruta) {

      case 'Dashboard':
        console.log("Caso 1");
      break; 
      case 'Forms':
        console.log("Caso 2");
      break;
      case 'UI Fitures':
        console.log("Caso 3");
      break; 
      case 'widgets':
        console.log("Caso 4");
      break;
      case 'charts':
        console.log("Caso 5");
      break;
      case 'tables':
        console.log("Caso 6");
      break;
      case 'pages':
        console.log("Caso 7");
      break;
  
      default:
        console.log("Not found 404");
  
    }
  
  }
export{
    router
}