import React from "react";

export default function RegisterUser(){
    return (
<div class="container mt-2">
    <h3 class="center text-primary"> Register New User </h3>
    <form method="post" action="/user">
        <div class="row mb-2">
            <label class="col-form-label col-md-3 col-lg-1" for="txt_name"> Name: </label>
            <div class="col-12 col-md-6">
                <input class="form-control" type="text" name="txt_name" id="txt_name" />
            </div>
            {/* There is a bug on purpose here. I have name on the form but on the Controller & DAO */}
        </div>
        <div class="row mb-2">
            <label class="col-form-label col-md-3 col-lg-1" for="txt_login"> Login: </label>
            <div class="col-12 col-md-6">
                <input class="form-control" type="email" name="txt_login" id="txt_login" required/>
            </div>
        </div>
        <div class="row mb-2">
            <label class="col-form-label col-md-3 col-lg-1" for="txt_pass"> Password: </label>
            <div class="col-12 col-md-6">
                <input class="form-control" type="password" name="txt_pass" id="txt_pass" autocomplete="off"
                       minlength="6" required/>
            </div>
        </div>
        <div class="row mb-2">
            <label class="col-form-label col-md-3 col-lg-1" for="txt_conf"> Confirm Password: </label>
            <div class="col-12 col-md-6">
                <input class="form-control" type="password" name="txt_conf" id="txt_conf" autocomplete="off"
                       minlength="6" required/>
            </div>
        </div>
        {/*<%-- Notice there is no permission. Normal Users cannot choose their permission. --%>*/}

        <div class="row mb-2">
            <div class="offset-md-1 col-12 col-md-2 d-grid">
                <button type="submit" onclick="return checkRegisterForm()" class="btn btn-success me-2"> Register</button>
            </div>
            <div class="col-12 col-md-2 d-grid">
                <button type="reset" class="btn btn-warning me-2" id="clear_button"> Clear</button>
            </div>
            <div class="col-12 col-md-2 d-grid">
                <a type="button" class="btn btn-danger me-2" href="index.html"> Cancel</a>
            </div>
        </div>
    </form>
</div>
    );
}