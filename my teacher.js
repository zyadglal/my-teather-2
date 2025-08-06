if (localStorage.getItem("lessonsDone") === null) {
    localStorage.setItem("lessonsDone", 0);
} else {
    document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${localStorage.getItem("lessonsDone")}<br>Lessons Done`;
}

// تحميل الصفحة: استرجاع الحالة القديمة
window.onload = function () {
    // 1- دروس
    const lessons = document.querySelectorAll('input[id="lessons"]');
    let lessonsCount = 0;
    lessons.forEach((checkbox, index) => {
        let savedState = localStorage.getItem(`lesson_${index}`);
        checkbox.checked = savedState === "true";
        if (checkbox.checked) lessonsCount++;
        checkbox.addEventListener('change', plus);
    });
    document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${lessonsCount}<br>Lessons Done`;
    localStorage.setItem("lessonsDone", lessonsCount);
    localStorage.setItem("lessons", lessons.length);

    // 2- الواجبات
    const homework = document.querySelectorAll('input[id="homework"]');
    let homeworkCount = 0;
    homework.forEach((checkbox, index) => {
        let savedState = localStorage.getItem(`homework_${index}`);
        checkbox.checked = savedState === "true";
        if (checkbox.checked) homeworkCount++;
        checkbox.addEventListener('change', homeworkFunc);
    });
    document.getElementById("homework-input").innerHTML = `<i class="fa-solid fa-clock"></i>${homeworkCount}<br>Homework Done`;
    localStorage.setItem("homeworkDone", homeworkCount);
    localStorage.setItem("homework", homework.length);

    // 3- التقدم
    let savedProgress = localStorage.getItem("progress") || 0;
    document.getElementById("progress").innerHTML = `<i class="fa-solid fa-book"></i>${savedProgress}%<br>progress`;
    updateProgress();
};

// دروس
function plus() {
    const checkboxes = document.querySelectorAll('input[id="lessons"]');
    let x = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            x++;
            localStorage.setItem(`lesson_${index}`, "true");
        } else {
            localStorage.setItem(`lesson_${index}`, "false");
        }
    });

    document.getElementById("num").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Lessons Done`;
    localStorage.setItem("lessonsDone", x);
    localStorage.setItem("lessons", checkboxes.length);
}

// واجبات
function homeworkFunc() {
    const checkboxes = document.querySelectorAll('input[id="homework"]');
    let x = 0;
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            x++;
            localStorage.setItem(`homework_${index}`, "true");
        } else {
            localStorage.setItem(`homework_${index}`, "false");
        }
    });

    document.getElementById("homework-input").innerHTML = `<i class="fa-solid fa-clock"></i>${x}<br>Homework Done`;
    localStorage.setItem("homeworkDone", x);
    localStorage.setItem("homework", checkboxes.length);
}

function updateProgress() {
    const lessons = document.querySelectorAll('input[id="lessons"]');
    const homework = document.querySelectorAll('input[id="homework"]');
    const total = lessons.length + homework.length;

    let completed = 0;

    lessons.forEach(ch => { if (ch.checked) completed++; });
    homework.forEach(ch => { if (ch.checked) completed++; });

    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("progress").innerHTML = `<i class="fa-solid fa-book"></i>${percent}%<br>progress`;
    localStorage.setItem("progress", percent);
}
updateProgress();

function explore() {
    window.scrollTo({
        top: 1356,
        behavior: 'smooth'
    });
}
isbar = true;
document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('hide');
    document.querySelector('.sidebar').classList.toggle('slide');
    if (isbar) {
        console.log('true');
        document.querySelector('.dashboard').style.width = '84%';
        isbar = false;
    } else {
        console.log('false');
        document.querySelector('.dashboard').style.width = '100%';
        isbar = true;
    }
});

document.querySelector('.F-ahmed').addEventListener('click', function () {
    window.open("https://www.facebook.com/bashmohandesAE?locale=ar_AR", "_blank")
})
document.querySelector('.F-salah').addEventListener('click', function () {
    window.open("https://www.facebook.com/salah.bassthalk?locale=ar_AR", "_blank")
})
document.querySelector('.F-khaled').addEventListener('click', function () {
    window.open("https://www.facebook.com/profile.php?id=100064076050923&locale=ar_AR", "_blank")
})
document.querySelector('.F-mohamed').addEventListener('click', function () {
    window.open("https://www.facebook.com/Mr.AbdELMaaboud?locale=ar_AR", "_blank")
})
document.querySelector('.Y-salah').addEventListener('click', function () {
    window.open("https://www.youtube.com/@mohamedsalah.bassthalk/videos", "_blank")
})
document.querySelector('.Y-ahmed').addEventListener('click', function () {
    window.open("https://www.youtube.com/@BashmohandesAE", "_blank")
})
document.querySelector('.Y-khaled').addEventListener('click', function () {
    window.open("https://www.youtube.com/@khaledsakr8181", "_blank")
})
document.querySelector('.Y-mohamed').addEventListener('click', function () {
    window.open("https://www.youtube.com/@mr.abdelmaaboud", "_blank")
})
document.querySelector('.T-ahmed').addEventListener('click', function () {
    window.open("https://web.telegram.org/k/#@ahmedessamdx", "_blank")
})
document.querySelector('.T-ayman').addEventListener('click', function () {
    window.open("https://web.telegram.org/k/#6588738336", "_blank")
})
document.querySelector('.W-ayman').addEventListener('click', function () {
    window.open("https://web.whatsapp.com/", "_blank")
})
document.querySelector('.W-salah').addEventListener('click', function () {
    window.open("https://web.whatsapp.com/", "_blank")
})
document.querySelector('.I-salah').addEventListener('click', function () {
    window.open("https://www.instagram.com/mosalah.bassthalk/", "_blank")
})
document.querySelector('.I-mohamed').addEventListener('click', function () {
    window.open("https://www.instagram.com/mr.abdelmaaboud/", "_blank")
})
document.querySelector('.I-khaled').addEventListener('click', function () {
    window.open("https://www.instagram.com/mrkhaledsakr", "_blank")
});

const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.task-input');
const taskContainer = document.getElementById('task-container');


input.onkeyup = function () {
    let task = input.value;
    if (task.length > 0) {
        addBtn.style.display = 'inline-block';
    } else {
        addBtn.style.display = 'none';
    }
};

let newTask = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.onclick = function () {
    let task = input.value;
    newTask.push(task);
    input.value = '';
    addBtn.style.display = 'none';
    localStorage.setItem('tasks', JSON.stringify(newTask));
    display();

}

function display() {
    let table = '';
    const states = JSON.parse(localStorage.getItem('taskStates')) || [];
    // Pair each task with its checked state and index
    const paired = newTask.map((task, i) => ({
        task,
        checked: !!states[i],
        index: i
    }));
    // Sort: unchecked first, checked last
    paired.sort((a, b) => a.checked - b.checked);
    // Render in sorted order
    for (let i = 0; i < paired.length; i++) {
        const { task, checked, index } = paired[i];
        const checkedAttr = checked ? 'checked' : '';
        const doneClass = checked ? 'done' : '';
        table += `
        <div class="task ${doneClass}"><input type="checkbox" onclick="ChangeBgToGreen()" ${checkedAttr}>${task}<button onclick="deleteTask(${index})"><i class="fa-solid fa-trash">
        </i></button></div>`;
    }
    taskContainer.innerHTML = table;
    updateStats();
}
display();

function deleteTask(i) {
    newTask.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(newTask));
    // Remove the corresponding state
    let states = JSON.parse(localStorage.getItem('taskStates')) || [];
    states.splice(i, 1);
    localStorage.setItem('taskStates', JSON.stringify(states));
    display();
}

function saveTaskStates() {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
    const states = [];
    checkboxes.forEach(cb => {
        states.push(cb.checked);
    });
    localStorage.setItem('taskStates', JSON.stringify(states));
}

function ChangeBgToGreen() {
    const checkbox = event.target;
    const taskDiv = checkbox.closest('.task');
    taskDiv.classList.toggle('done', checkbox.checked);
    updateStats();
    saveTaskStates();
    display();
}

function updateStats() {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
    const total = checkboxes.length;
    let done = 0;


    checkboxes.forEach(cb => {
        if (cb.checked) { done++ };
    });



    const remaining = total - done;
    const progress = total === 0 ? 0 : Math.round((done / total) * 100);

    // تحديث الصناديق في الصفحة
    document.getElementById('total2').innerHTML = `<i class="fa-solid fa-list-check"></i>${remaining}<br>Tasks`;
    document.getElementById('total').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${total}<br>Total Tasks`;
    document.getElementById('comp').innerHTML = `<i class="fa-regular fa-square-check"></i>${done}<br>Completed`;
    document.getElementById('rem').innerHTML = `<i class="fa-regular fa-square"></i>${remaining}<br>Remaining`;
    document.getElementById('progres2s').innerHTML = `<i class="fa-solid fa-bars-progress"></i>${progress}%<br> progress`;
}
updateStats();
display();

window.addEventListener('scroll', function () {
    const el1 = document.getElementById('smart_time');
    const el2 = document.getElementById('T-channels');
    const el3 = document.getElementById('element3');
    const el4 = document.getElementById('element4');
    const el5 = document.getElementById('element5');
    const el6 = document.getElementById('homework-input');
    const el7 = document.getElementById('num');
    const el8 = document.getElementById('element8');
    const el9 = document.getElementById('progress');
    const el10 = document.getElementById('element10');
    const el11 = document.getElementById('element11');
    const el12 = document.getElementById('element12');
    const el13 = document.getElementById('element13');
    const el14 = document.getElementById('element14');
    const el15 = document.getElementById('element15');
    const el16 = document.getElementById('total');
    const el17 = document.getElementById('comp');
    const el18 = document.getElementById('rem');
    const el19 = document.getElementById('progres2s');
    [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19].forEach(el => {
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 180) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        }
    });

});
console.log(scrollY)
if (document.getElementById('body').offsetWidth > 750) {
    view.onclick = function () {
        window.scrollTo({
            top: 1319,
            behavior: 'smooth'
        });
    }
    contacts.onclick = function () {
        window.scrollTo({
            top: 2317,
            behavior: 'smooth'
        });
    }
    time_table.onclick = function () {
        window.scrollTo({
            top: 1319,
            behavior: 'smooth'
        });
    }
    links.onclick = function () {
        window.scrollTo({
            top: 2317,
            behavior: 'smooth'
        });
    }
    channels.onclick = function () {
        window.scrollTo({
            top: 2582,
            behavior: 'smooth'
        });
    }
    tasks.onclick = function () {
        window.scrollTo({
            top: 3632,
            behavior: 'smooth'
        });
    }
    timetable.onclick = function () {
        window.scrollTo({
            top: 1701,
            behavior: 'smooth'
        });
    }
    h2ome.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    t2imetable.onclick = function () {
        window.scrollTo({
            top: 1319,
            behavior: 'smooth'
        });
    }
    c2hannels.onclick = function () {
        window.scrollTo({
            top: 2582,
            behavior: 'smooth'
        });
    }
    t2asks.onclick = function () {
        window.scrollTo({
            top: 3632,
            behavior: 'smooth'
        });
    }
}else{
    view.onclick = function () {
        window.scrollTo({
            top: 2441,
            behavior: 'smooth'
        });
    }
    contacts.onclick = function () {
        window.scrollTo({
            top: 3926,
            behavior: 'smooth'
        });
    }
    time_table.onclick = function () {
        window.scrollTo({
            top: 2409,
            behavior: 'smooth'
        });
    }
    links.onclick = function () {
        window.scrollTo({
            top: 3425,
            behavior: 'smooth'
        });
    }
    channels.onclick = function () {
        window.scrollTo({
            top: 4634,
            behavior: 'smooth'
        });
    }
    tasks.onclick = function () {
        window.scrollTo({
            top: 6373,
            behavior: 'smooth'
        });
    }
    timetable.onclick = function () {
        window.scrollTo({
            top: 3301,
            behavior: 'smooth'
        });
    }
    h2ome.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    t2imetable.onclick = function () {
        window.scrollTo({
            top: 2376,
            behavior: 'smooth'
        });
    }
    c2hannels.onclick = function () {
        window.scrollTo({
            top: 3863,
            behavior: 'smooth'
        });
    }
    t2asks.onclick = function () {
        window.scrollTo({
            top: 6317,
            behavior: 'smooth'
        });
    }
}

















