export default function About({DATA}) {
    return (
        <section id="about">
        <div className="container">
          <h2 className="section-title">Giới thiệu</h2>
          <div className="about-content">
            <p>
              Mình là <strong>{DATA.name}</strong>, sinh viên VKU và Fresher Frontend. Mình yêu thích
              xây UI sạch, mượt và dễ dùng với <strong>React</strong>, ưu tiên hiệu năng và trải nghiệm
              trên di động. Có kinh nghiệm tích hợp <strong>REST API</strong>, làm việc nhóm bằng
              <strong> Git/GitHub</strong>, và từng thử nghiệm kết hợp <strong>GPT API/RAG</strong> như điểm cộng.
            </p>
          </div>
        </div>
      </section>

    )


}