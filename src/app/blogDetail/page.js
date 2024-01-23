import Image from "next/image";
import sampleImg from "@/assets/img/cover (2).jpg";

export default function page() {
  return (
    <div className="post_box">
      <div className="post_info">
        <h4>아름다운 이 땅에 금수강산에 단군할아버지가 터잡으시고</h4>
        <ul>
          <li>
            글쓴이 <span>zero</span>
          </li>
          <li>
            조회 <span>0</span>
          </li>
          <li>
            댓글 <span>0</span>
          </li>
          <li>
            좋아요 <span>0</span>
          </li>
        </ul>
      </div>
      <div className="post_content">
        <div className="post_img">
          <Image src={sampleImg} alt="sample" />
        </div>
        <p>
          아름다운 이 땅에 금수강산에 단군할아버지가 터잡으시고 홍익인간 뜻으로
          나라 세우니 대대손손 훌륭한 인물도 많아
        </p>
      </div>
      <div className="post_reple">
        <ul>
          <li>
            <p>댓글입니다.</p>
          </li>
          <li>
            <p>댓글입니다.</p>
          </li>
          <li>
            <p>댓글입니다.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
