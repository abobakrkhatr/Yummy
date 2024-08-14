
 let inputUser = document.getElementById("uName");
 let inputEmail = document.getElementById("uEmail");
 let inputPhone = document.getElementById("uPhone");
 let inputAge = document.getElementById("uAge");
 let inputPassword = document.getElementById("uPassword");
 let inputRePassword = document.getElementById("uRePassword");
 let btnSubmit= document.getElementById('btnSubmit');
 let rowData=document.getElementById('rowData');

 function contact(){
rowData.innerHTML=`
<div class="col-lg-6">
<input id="uName" class="form-control" type="text" placeholder="Enter your Name">
<p id="alertName" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Special characters and numbers not allowed</p>
</div> 
<div class="col-lg-6">
<input id="uEmail" class="form-control" type="email" placeholder="Enter your Email">
<p id="alertEmail" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Email not valid *exemple@yyy.zzz</p>

</div>
<div class="col-lg-6">
<input id="uPhone" class="form-control" type="tel" placeholder="Enter your Phone">
<p id="alertPhone" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid Phone Number</p>
</div>
<div class="col-lg-6">
<input id="uAge" class="form-control" type="number" placeholder="Enter your Age">
<p id="alertAge" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid Age </p>

</div>
<div class="col-lg-6">
<input id="uPassword" class="form-control" type="password"
    placeholder="Enter your Password">
<p id="alertPassword" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid password *Minimum eight characters, at least one letter and one number:*</p>

</div>
<div class="col-lg-6">
<input id="uRePassword" class="form-control" type="password" placeholder="RePassword">
<p id="alertRePassword" class="d-none form-control my-2 py-3 text-center text-brown border-0 bg-pink">Enter valid repassword</p>

</div>
<button id="btnSubmit" type="button" class="btn text-capitalize col-lg-1 mx-auto text-danger border border-danger"
disabled>submit</button>.

`
}
 function isNameValid() {
  let uRegex = /^[A-za-z]{3,10}(\s?[A-za-z]{3,10})?$/;
  return uRegex.test(inputUser.value);
}

inputUser.onkeyup = function () {
  if (!isNameValid() || inputUser.value == "") {
    $("#alertName").removeClass("d-none");
  } else {
    $("#alertName").addClass("d-none");
  }
    if(isCheck()){
        btnSubmit.removeAttribute('disabled');
    }else{
        btnSubmit.setAttribute('disabled',true);
    }
};

