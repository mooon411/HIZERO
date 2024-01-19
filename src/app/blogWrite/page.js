import React from "react";

export default function page() {
  return (
    <div className="sign_box">
      <div className="sign_title">WRITE</div>

      <form className="sign_form">
        <fieldset>
          <legend className="blind">글쓰기 영역</legend>
          <div>
            <label htmlFor="titleText" className="required blind">
              제목
            </label>
            <input
              type="email"
              id="titleText"
              name="titleText"
              placeholder="제목"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label htmlFor="contentText" className="required blind">
              내용
            </label>
            <textarea
              id="contentText"
              name="contentText"
              placeholder="내용"
              autoComplete="off"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn_style">
            SEND
          </button>
        </fieldset>
      </form>
    </div>
  );
}
