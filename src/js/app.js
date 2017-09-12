console.log('Hello world');

const $userList = $('#user-list');

if($userList.length > 0) $userList.find('select').on('change', () => $userList.trigger('submit'));
