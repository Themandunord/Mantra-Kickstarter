/**
 * Created by Remy on 29/10/2016.
 */
export default function (){
    Meteor.users.deny({
        update: function() {
            return true;
        }
    });
}