
const banner = () => {

    return (
      <body>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://image.freepik.com/free-psd/banner-template-with-dog-food-design_23-2148514489.jpg" class="d-block w-100" alt="bannerPrimero" height="400" width="400" />
    </div>
    <div class="carousel-item">
      <img src="https://image.freepik.com/psd-gratuitas/nao-compre-adote-um-modelo-de-banner-para-animais-de-estimacao_23-2148616970.jpg" class="d-block w-100" alt="bannerSegundo" height="400" width="400"  />
    </div>
    <div class="carousel-item">
      <img src="https://image.freepik.com/free-psd/adopt-pet-banner-template-with-dog_23-2148545669.jpg" class="d-block w-100" alt="bannerTercero" height="400" width="400"  />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div class="container">
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <svg class="bi" width="30" height="24"><use href="/bootstrap"/></svg>
    </a>
    <span class="mb-3 mb-md-0 text-muted"> 2022 OmegaPetShop</span>
  </div>

  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li class="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use href="/twitter"/></svg></a></li>
    <li class="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use href="/instagram"/></svg></a></li>
    <li class="ms-3"><a class="text-muted" href="/"><svg class="bi" width="24" height="24"><use href="/facebook"/></svg></a></li>
  </ul>
</footer>
</div>
</body>
    );
}
export default banner;