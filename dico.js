function a (l1,l2)
{
    const dico = new Map()

for (i = 0; i < l1.length; i++)

{dico.set(l1[i], l2[i])
}

return dico 
}


l1 = ["chat", "chien", "vache", "loup", "poule"]
l2 = ["miaow", "wouaf", "meuh", "aouu", "cotcot"]
console.log(a(l1,l2))