import Image from "next/image";
import sampleImg from "@/assets/img/cover (2).jpg";
import Link from "next/link";

export default function page() {
  return (
    <div className="page_list">
      <ul>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/blogDetail">
            <Image src={sampleImg} alt="sample" />
            <div className="page_info">
              <h4>title</h4>
              <p>contents</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
