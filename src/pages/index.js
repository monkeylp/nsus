
import styles from './index.less';
import NavLink from 'umi/navlink';
import TitleBox from '../components/TitleBox';
import { Carousel, Button } from 'antd';
export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <TitleBox title="会议资讯" />
        <div className={styles.list}>
          <ul className={styles.msgs}>
            <li>
              <p><a target="_blank" alt="第一轮会议通知" href="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E8%B6%85%E5%BF%AB%E5%85%89%E8%B0%B1%E7%A0%94%E8%AE%A8%E4%BC%9A(%E7%AC%AC%E4%B8%80%E8%BD%AE%E9%80%9A%E7%9F%A5%EF%BC%89.pdf" rel="noreferrer">会议通知（第一轮）</a></p>
              <p><a target="_blank" alt="第二轮会议通知" href="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E8%B6%85%E5%BF%AB%E5%85%89%E8%B0%B1%E7%A0%94%E8%AE%A8%E4%BC%9A(%E7%AC%AC%E4%BA%8C%E8%BD%AE%E9%80%9A%E7%9F%A5%EF%BC%89.pdf" rel="noreferrer">会议通知（第二轮）</a></p>
              <p><a target="_blank" alt="赞助方案" href="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E8%B6%85%E5%BF%AB%E5%85%89%E8%B0%B1%E7%A0%94%E8%AE%A8%E4%BC%9A%E8%B5%9E%E5%8A%A9%E6%96%B9%E6%A1%88.pdf" rel="noreferrer">赞助方案</a></p>
              <p><a target="_blank" alt="会议通知" href="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E4%BC%9A%E8%AE%AE%E9%80%9A%E7%9F%A5%EF%BC%88%E9%80%9A%E7%94%A8%EF%BC%89.pdf" rel="noreferrer">会议通知</a></p>
              <p><a target="_blank" alt="会议手册" href="http://nsus-static.oss-cn-beijing.aliyuncs.com/NSUS5-2021%E4%BC%9A%E8%AE%AE%E6%89%8B%E5%86%8C.pdf" rel="noreferrer">会议手册</a></p>
            </li>
          </ul>
        </div>
        <TitleBox title="承办单位" />
        <div className={styles.address}>
          <img src="http://nsus-static.oss-cn-beijing.aliyuncs.com/%E9%99%A2%E5%BE%BD.png" alt="" />
          <div>山东大学</div>
          <div>前沿交叉科学青岛研究院</div>
          <div>分子科学与工程研究院</div>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.banner}>
          <Carousel autoplay effect="fade">
            <img src={require('root/assets/banner_kk1.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk2.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk3.jpeg')} alt="山东大学" />
            <img src={require('root/assets/banner_kk4.jpeg')} alt="山东大学" />
          </Carousel>
        </div>
        <TitleBox title="会议简介" />
        <div className={styles.introduce}>
          <p>
            随着国内超快光谱学研究的蓬勃发展，为进一步促进本领域科研人员之间的合作与交流，由山东大学前
            沿交叉科学青岛研究院-分子科学与工程研究院承办、中国科学院大连化学物理研究所分子反应动力学国家
            重点实验室协办的“第五届全国超快光谱研讨会”，拟定于2021年7月18日至21日在山东青岛举行。
          </p>
          <p>
            山东大学是具有悠久历史的著名高校，山东大学青岛校区位于崂山脚下、鳌山湾畔， 地处青岛市“蓝色硅谷”核心
            区，热忱欢迎各位同仁莅临“第五届全国超快光谱研讨会”， 也热忱欢迎国内外各厂商赞助会议并展示产品。
            期待与您相约岛城，共创未来！
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.button_box}>
          <Button type="primary" size="large" className={styles.button_item}>
            <a href="https://www.wjx.top/jq/63301164.aspx" alt="参会注册" target="_blank" rel="noopener noreferrer">参会注册</a>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/payinfo">缴费信息</NavLink>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/info/hotel">酒店</NavLink>
          </Button>
          <Button type="primary" size="large" className={styles.button_item}>
            <NavLink to="/info/traffic">交通</NavLink>
          </Button>
        </div>
        <TitleBox title="重要日期" />
        <div className={styles.list}>
          <ul className={styles.time_list}>
            <li>
              <div className={styles.font}>摘要投稿截止</div>
              <p className={styles.color}>2021年6月10日</p>
              <div className={styles.font}>优惠缴费截止</div>
              <p className={styles.color}>2021年6月30日</p>
              <div className={styles.font}>网上注册截止</div>
              <p className={styles.color}>2021年6月30日</p>
              <div className={styles.font}>会议报道及现场注册</div>
              <p className={styles.color}>2021年7月18日</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
