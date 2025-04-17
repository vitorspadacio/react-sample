import fetch from '@infrastructure/fetch'
import { RpgClass } from './RpgTypes'

export default {
  getClasses: (): Promise<RpgClass[]> =>
    fetch.get(`${(window as any).apis.dnd5e}/api/2014/classes`).then((response) =>
      Promise.all(
        (response as any).results.map((classe) =>
          fetch.get(`${(window as any).apis.dnd5e}${classe.url}`),
        ),
      ).then((classes) =>
        classes.map((classData) => ({
          name: classData.name,
          hitDie: classData.hit_die,
          savingThrows: classData.saving_throws.map((st) => st.name),
          subclasses: classData.subclasses.map((sub) => sub.name),
          proficiencies: classData.proficiencies.map((prof) => prof.name),
        })),
      ),
    ),
}
