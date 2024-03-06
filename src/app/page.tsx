import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <main className={styles.main}>
        <div>첫사진</div>
        <div>황진욱 & 이은혜</div>
        <div>2024년 05월 04일 토요일 오후 12시 </div>
        <div>인삿말</div>
        <div>부모님 성함</div>
        <div>연락처</div>
        <div>갤러리</div>
        <div>달력</div>
        <div>방명록</div>
      </main>
    </div>
  );
}
