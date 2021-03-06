export interface Setup {
  createRelative(
    town: Town,
    family: Family,
    base?: Partial<NPC>,
    force?: boolean
  ): NPC
  createParentage(
    town: Town,
    family: Family,
    npc: NPC,
    forceFather?: boolean
  ): void
  createChildren(
    town: Town,
    family: Family,
    marriage: Marriage,
    amount: number,
    motherRace?: string,
    fatherRace?: string,
    force?: boolean
  ): any
  createMarriage(
    town: Town,
    family: Family,
    npc: NPC,
    force?: boolean
  ): Marriage
  findParentRaces(npc: NPC): {
    lineage: string
    motherRace: string
    fatherRace: string
  }
}

export interface Family {
  key: string
  members: Record<string, any>
}

export interface Marriage {
  parents: string[]
  children: any[]
  socialClass?: string
}
