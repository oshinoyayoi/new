import { useNavigate } from "react-router-dom";
import "./cartSidebar.styles.css";

type Props = {
  sum: number;
};
const CartSidebar = ({ sum }: Props) => {
  let payPrice = 550 + sum;
  let navigate = useNavigate();
  let surplus = 10000 - sum;
  let sPrice = 550;
  if (surplus <= 0) {
    sPrice = 0;
  } else {
    sPrice = 550;
  }
  return (
    <div className="g-layout_sidebar-a-a">
      <div className="g-pane-g-lg-sticky">
        <div className="p-payment-2">
          <div className="p-payment_total-2">
            <div className="p-paymentAmountLabel">お支払金額</div>
            <div className="g-price-g-price-lg">
              {payPrice}
              <span>円</span>
            </div>
          </div>
          <div className="p-payment_body-g-units-lg">
            <dl
              className="p-payment_itemized-p-shorten-dl"
              id="p-payment_itemized"
            >
              <div className="total-price-1">
                <dt className="p-payment_sum-a-p-paymentSumShorten">
                  商品金額合計
                </dt>
                <dd className="sum-price-a">
                  {sum}
                  <span>円</span>
                </dd>
              </div>
              <div className="price-three">
                <dt className="left-price">送料</dt>
                <dd>
                  {sPrice}
                  <span>円</span>
                </dd>
              </div>
            </dl>
            <ul className="g-list-a-g-list-note">
              <div>
                *
                送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)
              </div>
              <div>
                * 未ログインまたは非会員の方はポイントが付与されません。
              </div>
            </ul>
          </div>
        </div>

        <div
          className={
            surplus >= 0
              ? "g-price-p-calcShipping"
              : "g-price-p-calcShipping-none"
          }
        >
          <div>
            <span>あと</span>
            {surplus}
            <span>
              <span>円</span>（税込）で
              <b className="g-color-strong">送料無料</b>
            </span>
          </div>
          <ul className="g-list g-list-note g-unit-xs">
            <div>大型家具除く</div>
          </ul>
        </div>
        <div>
          <a
            className="g-link"
            href="#p-pdfModal"
            role="button"
            aria-hidden="true"
            aria-expanded="false"
            aria-controls="p-pdfModal"
          >
            <i className="g-i g-i-arrow-r"></i>
            <span>見積書（PDF）を出力</span>
            <i className="g-s g-s-pdf"></i>
          </a>
        </div>
        <div className="g-foot-v">
          <div>
            <button className="g-btn-g-btn-cv-a-g-fw">
              <span className="reji-word">レジへ進む</span>
            </button>
          </div>
          <div>
            <div className="g-btn-a-g-fw">
              <span className="shopping-word" onClick={() => navigate("/")}>
                ショッピングを続ける
              </span>
              <i className="g-i g-i-arrow-r" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartSidebar;
