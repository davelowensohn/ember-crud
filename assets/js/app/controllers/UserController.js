// our nested user route will render only a single user at a time so it's an ObjectController
App.UserController = Ember.ObjectController.extend({
    // editMode / deleteMode properties are used in the user template 
    // we use them to manage css transitions when entering and exiting the edit route
    editMode: false,

    deleteMode: false,

    delete: function(){
        this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
        this.set('deleteMode', false);
    },
    confirmDelete: function(){
        // delete a user
        this.get('content').deleteRecord();
        this.get('store').commit();
        // then transition to the UsersRoute
        this.transitionToRoute('users');
    },
    edit: function(){
        this.setProperties({
            'editMode': true,
            'deleteMode': false
        });
        this.transitionToRoute('user.edit');
    }
});