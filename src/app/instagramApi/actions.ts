'use server';

const FACEBOOK_API = 'https://graph.facebook.com/v20.0';
const INSTAGRAM_BUSINESS_ID = '17841400119039742';
const ACCESS_TOKEN = 'EAAQoDAIkG7oBO4Ox1coua59HuR8ZBqD706sZAtMc13DZBYSTLRmewZAgZC9QYJxfzGameOh7CvsoqrsxmRuGRhXUZAMq9DmBqjwHOkgcq7hxZBMErVAIVch5cDuZBBlpPkVXP86slT0IkBGFveT0CcN5PqPWAjZASisI9RmPOZA4CPFIZC7xYqd7stv8JMi';
const DEFAULT_HASHTAG_ID = '17843740879024625';

interface fetchDataProps {
    hashtag: string;
}

export async function getFetchData({ hashtag }: fetchDataProps) {
    const hashTagResponse = await fetch(`${FACEBOOK_API}/ig_hashtag_search?user_id=${INSTAGRAM_BUSINESS_ID}&access_token=${ACCESS_TOKEN}&q=${hashtag}`);
    const searchHashTagId = await hashTagResponse.json();

    if (searchHashTagId.error) {
        throw new Error(JSON.stringify(searchHashTagId.error));
    }

    const hashTagId = searchHashTagId.data[0].id;
    const resp = await fetch(`${FACEBOOK_API}/${hashTagId}/recent_media?user_id=${INSTAGRAM_BUSINESS_ID}&fields=id,media_type,like_count,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`);
    const json = await resp.json();

    return json.data;
}