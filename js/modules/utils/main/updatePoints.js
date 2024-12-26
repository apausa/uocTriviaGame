// assigns score to js-points
export default function updatePoints(score) {
    const points = document.querySelector(".js-points");

    points.textContent = score;
}
