import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="sign_box">
        <div className="sign_title">LOGIN</div>

        <form className="sign_form">
          <fieldset>
            <legend className="blind">로그인 영역</legend>
            <div>
              <label htmlFor="youEmail" className="required blind">
                이메일
              </label>
              <input
                type="email"
                id="youEmail"
                name="youEmail"
                placeholder="이메일"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="youPass" className="required blind">
                비밀번호
              </label>
              <input
                type="password"
                id="youPass"
                name="youPass"
                placeholder="비밀번호"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn_style">
              로그인
            </button>
            <div className="sns_sign">
              <ul className="sns">
                <li>
                  <FcGoogle />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaFacebookF />
                </li>
              </ul>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
