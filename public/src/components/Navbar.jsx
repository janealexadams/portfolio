function Navbar() {
    return (
        <ul class="nav justify-content-end">
        <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Resume</a>
        </li>
        </ul>
    )
};

export default Navbar;