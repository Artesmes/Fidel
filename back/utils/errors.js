module.exports.signUpErrors = (err) => {
    let errors = { nom: '', prenom: '', email: '', codePostal: '', password: ''}

    if (err.message.includes('nom'))
        errors.nom = "Nom incorrect"
    
    if (err.message.includes('prenom'))
        errors.prenom = "Prenom incorrect"
    
    if (err.message.includes('email'))
        errors.email = "Email incorrect ou déjà pris"

    if (err.code === 11000) 
        errors.email = "Cet email est déjà pris"
    
    if (err.message.includes('codePostal'))
        errors.codePostal = "Code postal incorrect"

    if (err.message.includes('password'))
        errors.password = "Mot de passe incorrect"

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password:''}
    if (err.message.includes('email'))
        errors.email = "Email inconnu"
    
    if (err.message.includes('password'))
        errors.password = "Mot de passe incorrect"
    
    return errors
}