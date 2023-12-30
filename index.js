document.addEventListener("DOMContentLoaded", fetchQoutes);
let API_URL = "http://localhost:3000/api/qoutes";
// let API_URL = "mongodb+srv://asad:1410@cluster0.wrbiuck.mongodb.net/test";
// let API_URL = "https://restful-api-mongo-db.vercel.app/api/products";

async function fetchQoutes() {
    try {
        const response = await fetch(API_URL);
        const qoutes = await response.json();
        let qouteCardsHTML = '';
        qoutes.forEach((qoute) => {
            qouteCardsHTML += `
        <div class="qoute" data-id="${qoute._id}">
        <p>${qoute.qoute}</p>
        <p>Author: ${qoute.author}</p>
        <button onclick="handleDelete(this)">Delete</button>
        <button onclick="openEditForm(); handleUpdate(this)">Edit</button>
        </div>`;
        });
        document.getElementById('qoutes').innerHTML = qouteCardsHTML;

    } catch (error) {
        console.error("Error while fetching Qoutes:", error);
    }
}

function addQoute() {
    let Qoute = document.getElementById('qoute').value;
    let Author = document.getElementById('author').value;
    let Category = document.getElementById('category').value;

    if (!Qoute || !Author || !Category) {
        alert('All fields are required');
        return;
    };

    const newQoute = {
        qoute: Qoute,
        author: Author,
        category: Category
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newQoute)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('qoute').value = '';
            document.getElementById('author').value = '';
            document.getElementById('category').value = '';
            fetchQoutes();
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

async function handleUpdate(element) {
    let qouteElement = element.closest('.qoute');
    if (!qouteElement) {
        console.error('Qoute element not found');
        return;
    }
    let id = qouteElement.getAttribute('data-id');
    if (!id) {
        console.error('Qoute ID not found');
        return;
    }
    document.getElementById('editForm').setAttribute('data-id', id);
    const response = await fetch(`${API_URL}/${id}`);
    const qoute = await response.json();
    document.getElementById('editQoute').value = qoute.qoute;
    document.getElementById('editAuthor').value = qoute.author;
    document.getElementById('editCategory').value = qoute.category;

    openEditForm();
};

function submitEditForm() {
    let id = document.getElementById('editForm').getAttribute('data-id');
    let Qoute = document.getElementById('editQoute').value;
    let Author = document.getElementById('editAuthor').value;
    let Category = document.getElementById('editCategory').value;
    if (!Qoute || !Author || !Category) {
        alert('All fields are required');
        return;
    }

    let updatedQoute = {
        qoute: Qoute,
        author: Author,
        category: Category
    };

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedQoute)
    })
        .then(response => response.json())
        .then(() => {
            closeEditForm();
            fetchQoutes();
        })
        .catch(error => {
            console.error('Error:', error);
        });
};



function handleDelete(element) {
    let qouteElement = element.closest('.qoute');
    if (!qouteElement) {
        console.error('Qoute element not found');
        return;
    }
    let id = qouteElement.getAttribute('data-id');
    if (!id) {
        console.error('Qoute ID not found');
        return;
    }

    if (confirm('Are you sure you want to delete this quote?')) {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                fetchQoutes(); // Refresh the displayed quotes after deletion
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function openEditForm() {
    document.getElementById('editForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeEditForm() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('editForm').style.display = 'none';
}

document.body.innerHTML += '<div id="overlay" class="overlay"></div>';


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}