module.exports.signUpErrors = (err) => {
    let errors = { nom: '', prenom: '', email: '', codePostal: '', password: ''}

    if (err.message.includes('nom'))
        errors.nom = "nom incorrect"
    
    if (err.message.includes('prenom'))
        errors.prenom = "prenom incorrect"
    
    if (err.message.includes('email'))
        errors.email = "email incorrect ou déjà pris"

    if (err.code === 11000) 
        errors.email = "cet email est déjà pris"
    
    if (err.message.includes('codePostal'))
        errors.codePostal = "Code postal incorrect"

    if (err.message.includes('password'))
        errors.password = "Mot de passe incorrect"

    return errors
}