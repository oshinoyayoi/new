const Items = (items, size) => {
  const {
    skuId,
    skuName,
    color,
    colorImg,
    catchcopy,
    price,
    point,
    featureIcon1,
    featureIcon2,
    featureIcon3,
    featureIcon4,
    sizeDetail,
    material,
    weight,
    warranty,
    deliveryMethod,
    deliveryTime,
    deliveryImg,
  } = items;

  return (
    <div className="backGround">
      <div className="g-layout_head">
        <h1 className="skuName">{skuName}</h1>
        <span className="skuId">{skuId}</span>
      </div>

      <div className="g-layout_body">
        <div className="productImg">商品图片</div>

        <div className="sku-details">
          <div className="units-lg">
            <div className="sizeAndColor">
              <div>サイズ：{size}</div>
              <dd>
                <select className="sizeSelect"></select>
              </dd>
              <div>カラー：{color}</div>
              <ul>{colorImg}</ul>
            </div>
            <div className="catchCopy">{catchcopy}</div>
            <div className="priceAndPoint">
              <div className="price">{price}円</div>
              <div className="point">獲得ポイント{point}pt 付与</div>
            </div>
          </div>

          <div className="block-a"></div>

          <section className="g-details">
            <h2>
              <span>仕様・サイズ</span>
            </h2>
            <ul className="icons">
              {featureIcon1}
              {featureIcon2}
              {featureIcon3}
              {featureIcon4}
            </ul>
            <div className="specMore">
              <tbody>
                <tr>
                  <th>商品コード</th>
                  <td>{skuId}</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>{color}</td>
                </tr>
                <tr>
                  <th>サイズ</th>
                  <td>{sizeDetail}</td>
                </tr>
                <tr>
                  <th>素材</th>
                  <td>{material}</td>
                </tr>
                <tr>
                  <th>重量</th>
                  <td>{weight}</td>
                </tr>
                <tr>
                  <th>保証年数</th>
                  <td>{warranty}</td>
                </tr>
              </tbody>
            </div>
          </section>
        </div>
      </div>

      <div className="g-layout_sidebar">
        <div className="full-cls">
          <div className="p-order">
            <dl className="p-order">
              <span>納品方法</span>
              <dd>
                <span>{deliveryMethod}</span>
              </dd>
              <span>配送目安</span>
              <dd>{deliveryTime}</dd>
              <span>返品・交換</span>
              <dd>
                14日間返品可能
                <p className="p-order_help">
                  <a className="g-link" href="/ec/userguide/cancel/">
                    <span>返品・交換について</span>
                    <i className="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
              <dt>送料</dt>
              <dd>
                <span className="g-label-price">有料</span>
                <p className="p-order_help">
                  <a className="g-link" href="/ec/userguide/delivery/">
                    <span>送料について</span>
                    <i className="g-i g-i-info" aria-hidden="true"></i>
                  </a>
                </p>
              </dd>
            </dl>
          </div>

          <p>{deliveryImg}</p>

          <dl className="p-pcs">
            <dt>
              <label for="p-pieces">数量</label>
            </dt>
            <dd>
              <input
                className="g-input g-input-sm addToCartQty"
                id="p-pieces"
                type="text"
                name="quantity"
                value="1"
                size="5"
                maxlength="3"
              />
            </dd>
          </dl>
          <div>{price}円</div>

          <button
            onclick=""
            className="g-btn g-btn-cv g-btn-c g-fw addToCartBtn"
            id="p-addItem"
            type="button"
          >
            <i className="g-i g-i-add-cart" aria-hidden="true"></i>
            <span>カートに入れる</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
