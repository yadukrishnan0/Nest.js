export default function ProductLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       
        <nav>
          <p>i am neseted layOut</p>
        </nav>
   
        {children}
      </section>
    )
  }