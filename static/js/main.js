window.onload = async function loop() {
    let RotatingSongNameElement = document.querySelector("#name");
    let RotatingSongArtistElement = document.querySelector("#artists");
    // let RotatingContainerElement = document.querySelector("#app-cover");

    let socket;
    let updateTimer;

    const token = document.getElementById('token').value;
    const host = window.location.host;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const url = `${protocol}//${host}/ws`;

    function setupWebSocketHandlers(socket) {
        socket.onmessage = (event) => {
            if (JSON.parse(event.data).error === "bad token") {
                document.body.innerHTML = "";
                document.body.style.display = "flex";
                document.body.style.flexDirection = "column";
                const errorMessage = document.createElement("h1");
                errorMessage.textContent = "Ошибка: Неверный токен";
                
                const errorDescription = document.createElement("p");
                errorDescription.textContent = "Пожалуйста, войдите заново в аккаунт на главной странице. Ссылка на виджет не изменится";
                
                const errorlink = document.createElement("a");
                errorlink.textContent = "https://streamyam.ru";
                errorlink.href = "/";
                errorlink.target = "_blank";
                
                document.body.appendChild(errorMessage);
                document.body.appendChild(errorDescription);
                document.body.appendChild(errorlink);
            } else {
                const data = JSON.parse(event.data);
                updateTrackInfo(data);
            }
        };

        socket.onerror = (error) => {
            console.error("Ошибка WebSocket:", error);
        };

        socket.onopen = () => {
            console.log("WebSocket подключен");
            socket.send(token);
        };
    }

    socket = new WebSocket(url);
    setupWebSocketHandlers(socket);

    socket.onclose = () => {
        console.log("WebSocket закрыт. Попытка переподключения...");
        
        const reconnect = async () => {
            await sleep(5000);
            socket = new WebSocket(url);
            setupWebSocketHandlers(socket);
            
            socket.onerror = () => {
                console.log("Ошибка переподключения, пробуем снова...");
                reconnect();
            };
        };
        
        reconnect();
    };

    function updateTrackInfo(data) {
        console.log(data.artists + "-" + data.track_name);
        if (RotatingSongArtistElement.innerText == data.artists) {return;}
        const albums = document.querySelectorAll('#album');
        
        albums.forEach(album => {
            album.classList.add('hidden');
            album.classList.add('fade-out');
        });
        RotatingSongArtistElement.classList.add('hidden');
        RotatingSongNameElement.classList.add('hidden');
    
        setTimeout(() => {
            albums.forEach(album => {
                album.src = data.cover_url;
                sleep(500);
                album.classList.remove('fade-out');
            });
            RotatingSongArtistElement.innerText = data.artists;
            RotatingSongNameElement.innerText = data.track_name;

            // if (!data.paused) {
            //     RotatingContainerElement.classList.add("raise");
            //     RotatingContainerElement.classList.add("active");
            //     RotatingSongArtistElement.classList.remove("drop");
            //     RotatingSongNameElement.classList.remove("drop");
            // } else {
            //     RotatingContainerElement.classList.remove("raise");
            //     RotatingContainerElement.classList.remove("active");
            //     RotatingSongArtistElement.classList.add("drop");
            //     RotatingSongNameElement.classList.add("drop");
            // }
    
            albums.forEach(album => {
                album.classList.remove('hidden');
            });
            RotatingSongArtistElement.classList.remove('hidden');
            RotatingSongNameElement.classList.remove('hidden');
        }, 500);
    }

    function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
} 