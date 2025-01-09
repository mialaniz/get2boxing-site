export default function Footer() {
    return (
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Get2Boxing. All rights reserved.</p>
        </div>
      </footer>
    )
  }