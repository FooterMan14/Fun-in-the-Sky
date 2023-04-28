ServerEvents.recipes(event =>{
    //Lead
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "exnihilosequentia:lead_pieces")
        .addRoll(0.05, 'flint')
        .addRoll(0.10, 'iron')
        .addRoll(0.20, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
    //Copper
    event.remove({output: 'exnihilosequentia:copper_pieces'})
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "exnihilosequentia:copper_pieces")
        .addRoll(0.05, 'flint')
        .addRoll(0.10, 'iron')
        .addRoll(0.20, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
    //Nickel
    event.remove({output: 'exnihilosequentia:nickel_pieces'})
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "exnihilosequentia:nickel_pieces")
        .addRoll(0.10, 'iron')
        .addRoll(0.20, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
    //Lapis
    event.remove({output: 'minecraft:lapis_lazuli'})
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "minecraft:lapis_lazuli")
        .addRoll(0.10, 'iron')
        .addRoll(0.20, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
    //Flint
    event.remove({output: 'minecraft:flint'})
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "minecraft:flint")
        .addRoll(0.20, 'string')
        .addRoll(0.25, 'flint')
        .addRoll(0.25, 'iron')
        .addRoll(0.25, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
    //Iron
    event.remove({ output: 'exnihilosequentia:iron_pieces', type: 'exnihilosequentia:sieve' })
    event.recipes.exnihilosequentia.sieve('minecraft:gravel', 'exnihilosequentia:iron_pieces')
        .addRoll(1.0, 'flint')
        .addRoll(1.0, 'iron')
        .addRoll(1.0, 'diamond')
        .addRoll(1.0, 'emerald')
        .addRoll(1.0, 'emerald')
        .addRoll(1.0, 'netherite')
        .addRoll(1.0, 'netherite')
        .addRoll(1.0, 'netherite')
    //Gold
    event.remove({output: 'exnihilosequentia:gold_pieces'})
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "exnihilosequentia:gold_pieces")
        .addRoll(0.5, 'flint')
        .addRoll(0.10, 'iron')
        .addRoll(0.20, 'diamond')
        .addRoll(0.30, 'emerald')
        .addRoll(0.30, 'emerald')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        .addRoll(0.35, 'netherite')
        event.recipes.exnihilosequentia.sieve("exnihilosequentia:crushed_netherrack", "exnihilosequentia:gold_pieces")
        .addRoll(0.25, 'flint')
        .addRoll(0.30, 'iron')
        .addRoll(0.30, 'diamond')
        .addRoll(0.35, 'emerald')
        .addRoll(0.35, 'emerald')
        .addRoll(0.40, 'netherite')
        .addRoll(0.40, 'netherite')
        .addRoll(0.40, 'netherite')
    //Diamond
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "minecraft:diamond")
        .addRoll(0.24, 'emerald')
        .addRoll(0.24, 'emerald')
        .addRoll(0.32, 'netherite')
        .addRoll(0.32, 'netherite')
        .addRoll(0.32, 'netherite')
    //Emerald
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "minecraft:emerald")
        .addRoll(0.24, 'emerald')
        .addRoll(0.24, 'emerald')
        .addRoll(0.32, 'netherite')
        .addRoll(0.32, 'netherite')
        .addRoll(0.32, 'netherite')
    //Scrap
    event.recipes.exnihilosequentia.sieve("minecraft:gravel", "minecraft:netherite_scrap")
    .addRoll(0.12, 'emerald')
    .addRoll(0.12, 'emerald')
    .addRoll(0.16, 'netherite')
    .addRoll(0.16, 'netherite')
    .addRoll(0.16, 'netherite')
})