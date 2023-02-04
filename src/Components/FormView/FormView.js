import React from "react";
import { Link } from "react-router-dom";
import "./FormView.css"

function FormView({ formHead, formFoot, formData }) {
    return (
        <div>
            <div className="formBackground">
                <h2 className="formHeading ">{formHead}</h2>
                <br></br>
                <form>
                    {formData.inputs.map((input) => (
                        <div key={input.key}>
                            <input
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={input.handler}
                                className="inputField"
                            /><br></br>
                        </div>
                    ))}
                    <div>
                        <input type="submit" value={formHead} className="formSubmit" />
                    </div>
                    {formHead === "Login" && (
                        <div>
                            <div className="checkbox-circle">
                                <input type="checkbox" id="checkbox-circle1" name="rememberMe"></input>
                                    <label for="checkbox-circle1">Remember Me</label>
                            </div>
                            <Link to={"/forgotpassword"} target="_blank" className="formLastLinks">
                                Forgot password?
                            </Link>
                        </div>
                    )}
                    <div>
                        <Link to={formFoot.link} className="formLastLinks">{formFoot.name}</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormView;
