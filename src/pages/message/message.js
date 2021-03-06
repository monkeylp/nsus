
import styles from './message.less';
import ComBox from '../../components/ComBox'

const URI = [
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E9%99%84%E4%BB%B61.%20%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E5%9B%BD%E8%B6%85%E5%BF%AB%E5%85%89%E8%B0%B1%E7%A0%94%E8%AE%A8%E4%BC%9A%EF%BC%88%E6%91%98%E8%A6%81%EF%BC%89%E6%A8%A1%E6%9D%BF.docx',
  'http://nsus-static.oss-cn-beijing.aliyuncs.com/%E9%99%84%E4%BB%B62.%20Template%20for%20Abstract%20Submission%20to%20the%205th%20NSUS2021.docx',
]
export default function () {
  return (
    <ComBox title="投稿须知">
      <h1 style={{ textAlign: 'center' }}>论文摘要撰写说明及模板</h1>
      <div className={styles.content}>
        <h3>作者须知：</h3>
        <p>1. 有大会报告、邀请报告、口头报告和墙报的参会者，请务必提交论文摘要。</p>
        <p>2. 所有报告人及展示人必须是大会正式参会代表或学生参会代表，且须在大会官网注册并且缴纳注册费用。</p>
        <h3>重要日期：</h3>
        <p>摘要提交截止至2021年6月10日24时。</p>
        <h3>论文摘要撰写说明及模板：</h3>
        <p>1. 论文摘要为中文或英文，包括题目（中、英文均可）、作者姓名及工作单位（通讯作者以右上角标记星号）、邮编及通讯作者的E-mail地址。</p>
        <p>2. 中文500字左右，英文300词左右，根据需要可附图，摘要整体篇幅不超过A4纸一个页面。</p>
        <p>3. 页面设置为A4，页边距为“适中”，上下边距为2.54 cm，左右侧页边距为1.91 cm；</p>
        <p>4. 请使用摘要模板，在相应位置填写摘要内容，并删除提示内容；</p>
        <p>5. 论文撰写完成后，保存为Word文档以邮件形式提交。（会议邮箱：<a href="/">nsus2020@sdu.edu.cn</a>）</p>
        <div className={styles.other}>
          <p><a href={URI[0]}>附件1. 第五届全国超快光谱研讨会（摘要）模板.docx</a></p>
          <p><a href={URI[1]}>附件2. Template for Abstract Submission to the 5th NSUS2021.docx</a></p>
        </div>
      </div>
    </ComBox>
  );
}
