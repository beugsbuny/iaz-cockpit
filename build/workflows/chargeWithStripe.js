export function createCharge(amount) {
    console.log("💳 Création de paiement pour :", amount);
    return {
        success: true,
        chargeId: "ch_abc123"
    };
}
