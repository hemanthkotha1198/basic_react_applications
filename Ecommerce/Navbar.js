import React from 'react'
import bootstrap from 'bootstrap';
function Navbar() {
  return (
    <div>
        <div>        
        <ul class="nav justify-content-center">
            
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Element</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " aria-disabled="false">Page</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Portfolio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Blog</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Shop</a>
  </li>
</ul>
    </div>




    <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" class="d-block w-100" alt="..."  width='600px' height='600px'/>
      <div class="carousel-caption d-none d-md-block" >
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://www.moengage.com/wp-content/uploads/2020/07/5-E-commerce-Technology-Trends-That-Will-Shape-The-Future-1.jpg" class="d-block w-100" alt="..."  />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/06/00/09/19/360_F_600091962_CVPuFI1YaYI7xguiAmW9ZudOh2xZ0cnH.jpg" class="d-block w-100" alt="..."  width='600px' height='600px'/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
    </div>
    </div>
<div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://media.istockphoto.com/id/539221684/photo/photographers-computer-with-photo-edit-programs.jpg?s=612x612&w=0&k=20&c=QHklYoxlXz6JhhwQN4Q8BWwxu5dHlvqA9t5xLK984c8=" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://m.media-amazon.com/images/I/71bcl7VlwVL.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://5.imimg.com/data5/UE/AT/BG/SELLER-74935595/pixel-80cm-32-inch-full-hd-led-tv-pxl32he--500x500.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="data:image/jpeg;base64,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" class="img-fluid rounded-start" alt="..." height="500px"/>
      </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

<div>
<div class="container my-5">


<footer
        class="text-center text-lg-start text-white"
   
        >

  <section
           class="d-flex justify-content-between p-4"
     
           
           >

    <div class="me-5">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="text-white me-4">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
  


  <section class="">
    <div class="container text-center text-md-start mt-5">


      <div class="row mt-3">
     
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold">Company name</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
            
              
              />
          <p>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
      
          <h6 class="text-uppercase fw-bold">Products</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              
              />
          <p>
            <a href="#!" class="text-white">MDBootstrap</a>
          </p>
          <p>
            <a href="#!" class="text-white">MDWordPress</a>
          </p>
          <p>
            <a href="#!" class="text-white">BrandFlow</a>
          </p>
          <p>
            <a href="#!" class="text-white">Bootstrap Angular</a>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
      
          <h6 class="text-uppercase fw-bold">Useful links</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              
              />
          <p>
            <a href="#!" class="text-white">Your Account</a>
          </p>
          <p>
            <a href="#!" class="text-white">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!" class="text-white">Shipping Rates</a>
          </p>
          <p>
            <a href="#!" class="text-white">Help</a>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
     
     
          <h6 class="text-uppercase fw-bold">Contact</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              
              />
          <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </div>
    
    
      </div>
      
    </div>
  </section>
  


  <div
       class="text-center p-3"
       
       >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/"
       >MDBootstrap.com</a
      >
  </div>
  
  
</footer>



</div>


</div>
    </div>


  )
}

export default Navbar