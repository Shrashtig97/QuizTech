const courses = [
    { id: 1, name: 'Web Development Basics', category: 'Web', image: 'web_course.jpg' },
    { id: 2, name: 'Data Science Fundamentals', category: 'Data', image: 'data_course.jpg' },
    { id: 3, name: 'UI/UX Design Principles', category: 'Design', image: 'design_course.jpg' },
    // Add more courses as needed
];
function generateCourseCards(courses) {
    const container = document.getElementById('courseContainer');
    container.innerHTML = '';
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('blog-post');
        card.innerHTML = `
            <div class="blog-content">
                <h2>${course.name}</h2>
                <p><strong>Category:</strong> ${course.category}</p>
                <img src="${course.image}" alt="${course.name}">
            </div>
        `;
        container.appendChild(card);
    });
}
function filterCourses(category) {
    const filteredCourses = category === 'All' ? courses : courses.filter(course => course.category === category);
    generateCourseCards(filteredCourses);
}
// Initial page load
generateCourseCards(courses);
