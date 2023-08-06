const busquedaGithub = async () => {
  const nombreUsuario = document.getElementById("inputBusqueda").value;
  const respuesta = await fetch(
    `https://api.github.com/users/${nombreUsuario}`
  );
  const textoDetalle = document.querySelector(".detalles");
  const dato = await respuesta.json();

  if (respuesta.ok) {
    textoDetalle.style.display = "flex";
    document.getElementById("resultado").innerHTML = `
        <div class="profile">
        <div class="profile-image">
            <img src="${dato.avatar_url}" />
        </div>
        <h2 class="name">${dato.name || dato.login}</h2>
        <p class="username">@${dato.login}</p>
        <p class="bio">${dato.bio || "La cuenta no tiene una biografía."}</p>

        <div class="stats">
        <div>
            <div class="stats-name">Public Repos</div>
            <div class="stats-value">${dato.public_repos}</div>
        </div>
        <div>
            <div class="stats-name">Followers</div>
            <div class="stats-value">${dato.followers}</div>
        </div>
        <div>
            <div class="stats-name">Following</div>
            <div class="stats-value">${dato.following}</div>
        </div>
    </div>

    <div class="media">
    <p>
        <span class="media-value">${
          dato.location || "No se encuentra desponible"
        }</span>
    </p>
    <p>
        <span class="media-value">${
          dato.blog || "No se encuentra desponible"
        }</span>
    </p>
    <p>
        <span class="media-value">${
          dato.twitter_username || "No se encuentra desponible"
        }</span>
    </p>
    <p>
        <span class="media-value">${
          dato.company || "No se encuentra desponible"
        }</span>
    </p>
</div>
</div>
</div>
    `;
  } else {
    alert('Estas Ingresando Datos erroneos');
  }
};
