import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   

  <div class="someContainer">  
      <h1 class="someText">Roman Tabarkevych</h1> 
      <p>Ivano-Frankivsk • +380660787821 • tabarkevych.roman.p@gmail.com</p>
      <hr>
      <h1 class="someText">Educational background and other experience</h1>
      <p class="text">2008 - 2013: Ivano-Frankivsk National Technical University of Oil and Gas, specialty "Computerized Control Systems and Automation", qualification of engineer from automated systems. Form of study stationary. 
        Being a student doing 3D modeling in 3D-Max.</p>
        <p class="text">2013 - 2018: PJSC "Ivano-Frankivsk Cement", engineer of automated control systems for measuring the operation of the control system.</p> 
        <p class="text">September 2018 - December 2018: LLC "Aeroplus", engineer of ACS.</p>
        <p class="text">From the experience of previous work I have programming skills PLC Siemens in the language of LAD, FBD.</p>
        <p class="text">2018: Studying English. Runa, pre-intermediate level.<br>
        2019: Studying English. SBEDIF, intermediate level. 
        </p>
  </div>
      

    
  `,
  styles:
   [`.someContainer {margin: 20px;}
   .someText {font-size:1.2rem;}`]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
