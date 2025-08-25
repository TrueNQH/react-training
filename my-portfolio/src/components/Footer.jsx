export default function Footer({DATA}) {
    return (
         <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} {DATA.name}.</p>
        </div>
      </footer>
    )
}