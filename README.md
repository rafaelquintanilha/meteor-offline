# meteor-offline
Meteor offline example, with syncing and caching

The aim of this repo is to provide an example showing the differences between Meteor "regular" collections and a [GroundDB](https://github.com/GroundMeteor/db) collection. Worthy to note, Meteor and GroundDB comes with free syncing for you (although the dispute method is rather naive).

It is still true that the subscriptions must be handled during the startup. To minimize this, [SubsManager](https://github.com/meteorhacks/subs-manager/) becomes part of the stack.

Try to play around with the [live demo](http://meteor-offline.meteor.com/) or get yourself a copy of this repo. Experiment adding or deleting numbers (by clicking on them) when offline in both collections and see how it works persistently on the Ground collection. Note that even the Numbers collection being a normal Meteor collection, it can still work offline and sync when online (although it cannot persist).

Feel free to suggest (better then, make) improvements and have a look throughout the files. The comments are pretty straightforward.