# ARCHITECTURE

## Components

- /Blocks

Contiendra tout tes dump components, par exemple une modal, une header, footer

- /Fields

Contiendra tout les composants lié à la gestion des formulaires par exemple un TextField, un TextArea, un bouton etc etc

- /Forms

Contiendra tout les composants de formulaire qui eux seront connecté a redux-form et dedans tu pourra importer tes composants du dossier /Fields

- /Pages

Contiendra tes pages qui seront connecté a ton router, ou pas forcément ça dépend comment tu t'organise et ce que tu veux faire, mais ça reste le mieux en terme d'organisation je pense.


## Configs

Tout tes fichiers de configurations par exemple le fichier qui permet la génération automatique des routes depuis un tableau d'objet, mais ça peut être autre chose, la gestion d'un menu par exemple...

## Helpers

Tu sait c'est quoi ça déjà

## Store

Alors ici c'est un peu particulier de ce que tu as eu l'habitude de connaitre

Ici on va créer un dossier par exemple :

- /store/user

Celui aura 4 fichiers :

- actions.ts
- reducers.ts
- types.ts
- index.ts

le fichier index.ts servira juste à faire un export des trois précédents fichiers.

Ensuite tu connait comment on fait, simplement que maintenant on sépare les choses pour plus de clarté

Ensuite, ton fichier reducers.ts, devra être importé dans le fichier : `/reducers/index.ts`

car ce fichier contiens tout les reducers de ton app, donc ton state global de ton app.

## Reducers

celui n'a qu'un fichier c'est normal ce fichier sert juste à importer tes reducers depuis ton dossier /store et à avoir ton store global


# ARCHITECTURE D'UN COMPOSANT

Dedans généralement tu trouvera 2 ou 3 fichiers, index.tsx qui est ton composant React, styles.scss ton CSS et un fichier types.ts

Celui est assez particulier, il contiendra tes interfaces de typage ou des enums (un enums est un simple objet), une interface c'est un objet qui prend clef: valeur (valeur étant un type, si tu connait pas le type a l'avance utilise any et tu typera après)

`export type Props = xxx`

Une variable qui contiendra une ou plusieurs interface, tes props qui vienne de redux (mapStateToProps, mapDispatchProps), tes props local à ton composant (this.props)

Pour ces trois choses, on sépare en plusieurs interface :

Dans le cas ou c'est des props qui sont passé à ton composant alors on dira que c'est :

``` export interface OwnProps {} ```

Quand ça viens du mapStateToProps :

``` export interface StateProps {} ```

Quand ça viens du mapDispatchToProps :

``` export interface DispatchProps {} ```

C'est trois interface peuvent ensuite être utilisé comme ça :

`export type Props = OwnProps | StateProps | DispatchProps` (un pipe est égale au double pipe en JS)

Après d'autre déclaration de type peuvent être utile notamment dans le cas de redux-form, mais je te laisse chercher sur internet.


# HERE WE GOOO !!! GOOD LUCK !!!

