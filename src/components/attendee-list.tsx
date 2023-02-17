export type Invitation = {
    status: string,
    potlukker: {
        userId: number,
        username: string,
        fname: string,
        lname: string,
        allergies: string[]
    }
}
export  enum InvitationStatus {
     ACCEPTED="Accepted",
    MAYBE ="Maybe",
     DECLINED="Declined",
    PENDING="Pending"
}
export type AttendeesListProps = {
    attendees: Invitation[]
    isGuest:boolean
}
export function AttendeesList(props: AttendeesListProps) {
    return<>
      <h2>Attendees</h2>
      <ul>
            {props.attendees.map(a => <li key={a.potlukker.userId}>{a.potlukker.fname} {a.potlukker.lname} {props.isGuest ? <></> : <b>{a.status}</b>}</li>)}
        </ul>   
    </>

}