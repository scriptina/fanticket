export function getLoginComponent(){

    return `
        <div class="wrapper d-flex justify-content-center align-items-center">
            <div class="form-container" id="login">
                <div class="card p-4">
                    <div class="card-body">
                        <div class="card-title-link">
                            <span>Don't have an account? <a class="textHeadingLink" href="#" onclick="register()">Sign Up</a></span>
                        </div>
                        <h4 class="card-title text-center mb-5">Login</h4>
                        <form>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa fa-regular fa-envelope"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="text" placeholder="Username or Email" aria-label="Username or Email" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa-solid fa-lock"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="password" placeholder="Password" aria-label="Password" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn ticketBtn w-100" value="Sign In">
                            </div>
                            <div class="d-flex flex-wrap justify-content-between">
                                <div class="d-flex align-items-center gap-2">
                                    <input type="checkbox" id="login-check">
                                    <label class="m-0" for="login-check">Remember Me</label>
                                </div>
                                <div>
                                    <small><a class="textHeadingLink card-title-link" href="#">Forgot Password?</a></small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
    
            <div class="form-container" id="register" style="display:none;">
                <div class="card p-4">
                    <div class="card-body">
                        <div class="card-title-link">
                            <span>Already have an account? <a class="textHeadingLink" href="#" onclick="login()">Login</a></span>
                        </div>
                        <h4 class="card-title text-center mb-5">Sign Up</h4>
                        <form>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa-regular fa-user"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="text" placeholder="Firstname" aria-label="Firstname" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa-regular fa-user"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="text" placeholder="Lastname" aria-label="Lastname" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="email" placeholder="Email" aria-label="Email" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group" style="height: inherit">
                                    <span class="input-group-prepend">
                                        <div class="input-group-text bg-transparent border-right-0">
                                            <i class="fa-solid fa-lock"></i>
                                        </div>
                                    </span>
                                    <input class="form-control py-2 border-left-0 border" type="password" placeholder="Password" aria-label="Password" style="height: inherit; font-size: 1.1em">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn ticketBtn w-100" value="Register">
                            </div>
                            <div class="d-flex justify-content-between gap-2">
                                <div class="d-flex align-items-center gap-2">
                                    <input type="checkbox" id="register-check">
                                    <label class="m-0" for="register-check">Remember Me</label>
                                </div>
                                <div>
                                    <a class="textHeadingLink card-title-link" href="#">Terms & Conditions</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    `;
}