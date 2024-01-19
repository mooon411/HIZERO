import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="sign_box">
        <div className="sign_title">JOIN</div>

        <form className="sign_form">
          <fieldset>
            <legend className="blind">회원가입 영역</legend>
            <div>
              <label htmlFor="youName" className="required blind">
                이름
              </label>
              <input
                type="email"
                id="youName"
                className="check_input"
                name="youName"
                placeholder="이름"
                autoComplete="off"
                required
              />
              <button className="check_btn">CHECK</button>
            </div>
            <div>
              <label htmlFor="youEmail" className="required blind">
                이메일
              </label>
              <input
                type="email"
                id="youEmail"
                className="check_input"
                name="youEmail"
                placeholder="이메일"
                autoComplete="off"
                required
              />
              <button className="check_btn">CHECK</button>
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
            <div>
              <label htmlFor="youPassCheck" className="required blind">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="youPassCheck"
                name="youPassCheck"
                placeholder="비밀번호 확인"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn_style">
              회원가입
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
