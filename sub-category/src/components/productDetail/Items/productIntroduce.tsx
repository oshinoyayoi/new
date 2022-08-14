import { CalendarOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { Fragment } from "react";
import "./productIntroduce.styles.css";
export type ProductIntroduceProps = {
  size: string;
};
const ProductIntroduce = ({ size }: ProductIntroduceProps) => {
  return (
    <Fragment>
      <div className="product-introduce">
        <i className="fa-solid fa-user"></i>
        <div className="title">
          <Space className="icon">
            <CalendarOutlined />
          </Space>
          商品説明
        </div>
        <div className="product-mv-backgroud">
          <div className="block">
            <div className="product-mv">
              <div id="youtube-video" className="youtube-wrapper">
                <div className="youtube">
                  <iframe
                    src="//www.youtube.com/embed/bY81jGaNxas?rel=0&amp;enablejsapi=1"
                    frameBorder="0"
                    data-gtm-yt-inspected-70="true"
                    id="176216654"
                    data-gtm-yt-inspected-61683982_3="true"
                    data-gtm-yt-inspected-61683982_7="true"
                    title="ゴムバンド付き敷きパッド　シングルNクールWSP n s WH S7565694 改"
                  ></iframe>
                </div>
              </div>

              <div id="youtube_video" className="youtube-wrapper">
                <div className="youtube">
                  <iframe
                    src="//www.youtube.com/embed/ZHl1dngSO34?rel=0&amp;enablejsapi=1"
                    frameBorder="0"
                    data-gtm-yt-inspected-69="true"
                    id="719962492"
                    title="ニトリの接触冷感 Nクールダブルスーパー～一番冷たいが長持ちする【さらさら】極冷感面と肌になじむニット面のリバーシブル～"
                    data-gtm-yt-inspected-61683982_3="true"
                    data-gtm-yt-inspected-61683982_7="true"
                  ></iframe>
                </div>
              </div>
              <span className="text">
                <a
                  className="blue-words"
                  href="https://www.nitori-net.jp/ec/search/?q=N%E3%82%AF%E3%83%BC%E3%83%AB%E5%AF%9D%E5%85%B7_N%E3%82%AF%E3%83%BC%E3%83%ABWSP%E3%82%82%E3%81%A3%E3%81%A8%E8%A6%8B%E3%82%8B"
                >
                  同じNクールWスーパーの寝具をもっと見る&gt;&gt;
                </a>
              </span>
              <div className="img-1">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_01.jpg"
                  alt="NクールSP　さらもち"
                />
              </div>
              <div className="img-2">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_02.jpg"
                  alt="接触冷感とは？"
                />
              </div>
              <div className="good">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565623s/good.jpg"
                  alt="NクールSP　さらもち"
                />
              </div>
              <p className="a-word-1">「表」と「裏」のリバーシブル</p>
              <p className="a-1">
                夏は<span>ひんやり長続き「極冷感」</span>素材、春・秋は
                <span>さらさら「ニット」</span>
                素材を使い分けることで春から秋まで長くお使い頂けます。
              </p>
              <div className="img-3">
                <img
                  src="https://www.nitori-net.jp/ecstatic/include/goods/rich/7/7565681/7565681_03.jpg"
                  alt="NクールSP　さらもち"
                />
              </div>
            </div>
            <div className="introduction">
              <div className="size">{size}サイズ</div>
              <div>【ニトリの接触冷感(Ｎクールダブルスーパー)】表生地</div>
              <div>●吸放湿わた(中わた)</div>
              <div>●抗菌防臭(表生地)</div>
              <div>●制菌加工(表生地)</div>
              <div>■組成 </div>
              <div>
                表生地：ナイロン55％、複合繊維(ナイロン、ポリエチレン)38％、ポリウレタン7％
              </div>
              <div>不織布：レーヨン50％、ポリエステル50％(PCM加工)</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductIntroduce;
