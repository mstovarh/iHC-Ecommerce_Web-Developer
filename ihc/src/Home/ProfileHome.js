function ProfileHome(){
    return(
        <>
        <div id="profileModal" className="profile-contenedor">
            <div className="profile">
                <h2>Perfil</h2>
                <p id="email_dir" />
                <button id="cerrarProfile" className="btn btn-warning">
                    Cerrar
                </button>
            </div>
        </div>
        </>
    );
}

export {ProfileHome};