const routerService = (idPokemon, search) => {
  const pathService = {
    pathname: `/pokemon/${idPokemon}`,
    search: `${search}`
  };
  return pathService;
};
export default routerService;
